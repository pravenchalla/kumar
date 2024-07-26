const User = require('../model/userModule')

exports.createUser = async (req,res) => {
    try{
    const {Name, age, role,email,password} = req.body

    const user = new User ({
        Name: Name,
        age: age,
        role: role,
        email: email,
        password: password
    })
    await User.save();
    res.status(201).json({
        success: true,
        data: user
    })
        }catch(err){
            res.status(500).json({
                success: false,
                message: err.message
            })
        }
    

}

exports.viewAllUser = async(req,res) => {
    try{
        const user = await User.find({isDeleted: false})
        res.status(201).json({
            success: true,
            data: user
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
exports.updateUserById = async (req,res) => {
    const {id}= req.params
    const{Name, age,role, email,password} = req.body
    try{
        const user = await User.findByIdAndUpdate(id, {Name: Name, age: age, role: role, email: email, password: password})
        res.status(500).json({
            success: true,
            data: user
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
exports.userDelete = async (req,res) => {
    const {id} = req.params
    try{
        const user = await User.findById(id)
        User.isDeleted = true;
        user.save();
        res.status(201).json({
            success: true,
            data: user
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}