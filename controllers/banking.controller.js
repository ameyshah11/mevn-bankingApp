const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const BankingCustomerModel = db.banking;

//Create Customer

exports.create = (req,res,next) => {

    let {name,mobile,address,email,password} = req.body
    BankingCustomerModel.create({
        name,
        mobile,
        address,
        email,
        password
    },(err,result)=>{
        if(err)
        {
            res.json({
                message:"Error while creating/Saving the customer",
                error : err
            })
        }
        else{
            res.json({
                status:200,
                message:"Customer added successfully !",
                data:{
                    model:result
                }
            })
        }
    })
}

// Get All Customer

exports.getAll = (req,res,next) => {
    BankingCustomerModel.find({},(err,result)=>{
        if(err)
        {
            res.json({
                message:"Error while retrieving the customer",
                error : err
            })
        }
        else{
            res.json({
                status:200,
                message:"All Customer retrieved successfully !",
                data:{
                    customers:result
                }
            })
        }
    })
}

// Get Customer By ID

exports.getById = (req,res,next) => {
    BankingCustomerModel.findById(req.params.id,(err,result)=>{
        if(err)
        {
            res.json({
                message:"Error while retrieving the customer by ID",
                error : err
            })
        }
        else
        {
            res.json({
                status:200,
                message:"Customer retrieved successfully By ID !",
                data:{
                    customers:result
                }
            })
        }
    })
}

// Get Customer By email

exports.getByEmail = (req,res,next) => {
    BankingCustomerModel.find({"email":req.body.email},(err,result)=>{
        if(err)
        {
            res.json({
                message:"Error while retrieving the customer by Email",
                error : err
            })
        }
        else
        {
            res.json({
                status:200,
                message:"Customer retrieved successfully By Email !",
                data:{
                    customers:result
                }
            })
        }
    })
}

// Update Customer By ID

exports.updateById = (req,res,next) => {
    BankingCustomerModel.findByIdAndUpdate(req.params.id,(err,result)=>{
        if(err)
        {
            res.json({
                message:"Error while updating the customer by id",
                error:err
            })
        }
        else
        {
            res.json({
                status:200,
                message:"Customer Updated successfully by ID !",
                data:{
                    customers:result
                }
            })
        }
    })
}

// Delete Customer By ID

exports.deleteById = (req,res,next) => {
    BankingCustomerModel.findByIdAndRemove(req.params.id,(err,result)=>{
        if(err)
        {
            res.json({
                message:"Error while deleting the customer by ID !",
                error:err
            })
        }
        else
        {
            res.json({
                status:200,
                message:"Customer deleted successfully by ID !",
                data:{
                    customers:result
                }
            })
        }
    })
}
// Delete All

exports.deleteAll = (req,res,next) => {
    BankingCustomerModel.remove({},(err,result)=>{
        if(err)
        {
            res.json({
                message:"Error while deleting the customers",
                error:err
            })
        }
        else
        {
            res.json({
                status:200,
                message:"All customer records deleted successfully !",
                data:result
            })
        }
    })
}