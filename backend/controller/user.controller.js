import bcryptjs from "bcryptjs";  // HashPassword
import jsonwebtoken from 'jsonwebtoken';
import User from '../model/user.model.js';

const SECRET_KEY='3f8f2e7b5c3d6e8a9f0b4d2a7c6e9f1a3b4d5e6f7a8b9c0d1e2f3g4h5i6j7k8l';
export const Signup = async(req,res)=> {
try{
  const { userName , email , password , role} = req.body;
  const user = await User.findOne({ email });

  if(user){
    return res.status(400).json({message: "User already existed"})
  }else{
   const hashPassword = await bcryptjs.hash(password, 10); // convert - hash password
   const createNewUser = await User ({
    userName,
    email,
    password:hashPassword,
    role
   });
   await createNewUser.save();
   res.status(201).json({message: 'User create Successfully'});
  }
} catch (error){
res.status(500).json({message: "Internal Server error"})
}
}

// Login

export const Login = async (req, res) => {
  try {
      const { email, password } = req.body;

      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: "Invalid Username or Password" });
      }

      // Compare hashed password
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ message: "Invalid Username or Password" });
      }

      // Generate JWT Token
      const token = jsonwebtoken.sign(
          { id: user._id, role: user.role },
          SECRET_KEY,
          { expiresIn: "1h" } // Token expiration time
      );

      // Send response
      res.status(200).json({
          message: "Login Successfully",
          token,
        //   user: {
              id: user._id,
              userName: user.userName,
              email: user.email,
              role: user.role
        //   }
      });

  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
  }
};
