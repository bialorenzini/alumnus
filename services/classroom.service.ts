import Classroom from "../models/entities/Classroom";
import ClassroomRepositorio from "../models/repositories/ClassroomRepositorie";

class ClassroomService {
    private static instance: ClassroomService;

    private constructor(){

    }

    public static getInstance(){
        if(!ClassroomService.instance){
            ClassroomService.instance = new ClassroomService();
        };
        return ClassroomService.instance;
    }

    public async getClassroom() : Promise<Classroom[]> {
        return await ClassroomRepositorio.find();
    }
}

export default ClassroomService