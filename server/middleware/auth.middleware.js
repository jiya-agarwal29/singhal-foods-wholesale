import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const authenticateUser = async (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Authorization token is required."
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found."
            });
        }

        req.user = user;//Now every controller after this middleware can access req.user without querying the database again.

        next();

    } catch (error) {
        if (
            error.name === "JsonWebTokenError" ||
            error.name === "TokenExpiredError"
        ) {
            return res.status(401).json({
                success: false,
                message: "Invalid or expired token."
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error.",
            error: error.message
        });
    }
};


export const authorizeRoles = (...roles)=>{
    return (req, res, next) =>{
        if(!roles.include(req.user.role)){
            return res.status(403).json({//forbidden(not allowed)
                success: false,
                message: "Access denied."
            });
        }

        next();
        
    };
};