import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const exerciseLogSchema = mongoose.Schema(
    {
        user:{
            type: ObjectId,
            ref: 'User',
            required: true
        },
        workout: {type: ObjectId, ref: 'Workout', required: true},
        exercise: {type: ObjectId, ref: 'Exercise', required: true},
        completed: {type: Boolean, default: false},
        times: [{
         weight: {type: Number, required: true},   
         repeat: {type: Number, required: true},   
         completed: {type: Boolean, default: false},
        }]
    },
    {
        minimize: false,
        timestamps: true,
    }
)



const exerciseLog = mongoose.model('ExerciseLog', exerciseLogSchema);

export default exerciseLog;