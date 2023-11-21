import passport from "passport";
import User from "../models/user.js";

export const loginController = async (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "User has successfully authenticated",
      user: req.user,
      cookies: req.cookies,
      error: false,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
};

export const loginFailedController = async (req, res) => {
    res.status(401).json({
        error: true,
        message: "User failed to authenticate.",
    });
}

export const googlecontroller = async (req, res, next) => {
    passport.authenticate("google", { scope: ["profile", "email"] })(req, res, next);
}

export const googleRedirectController = passport.authenticate("google", {
    successRedirect: "/auth/login/success",
    failureRedirect: "/auth/login/failed",
});

  
export const googleRedirectCallbackController = async (req, res, next) => {
    passport.authenticate("google", async (err, user, info) => {
      if (err) {
        console.error("Error in passport.authenticate:", err);
        return next(err);
      }

      console.log("User:", user);
      console.log("Info:", info);

      if (!user) {
        console.error("User not found.");
        return res.redirect("/auth/login/failed");
      }

      req.login(user, async (loginErr) => {
        if (loginErr) {
          console.error("Login error:", loginErr);
          return next(loginErr);
        }

        // Call the findOrCreate method to save the user data to the database
        await User.findOrCreate(user);

        console.log("User authenticated successfully.");
        return res.redirect("/auth/login/success");
      });
    })(req, res, next);
};

  

export const logoutController = async (req, res) => {
    req.logout();
    res.redirect("http://localhost:3000");
}

