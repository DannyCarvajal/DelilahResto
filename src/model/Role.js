
export const roleModel= (sequelize,DataTypes) =>{
    
    const role = sequelize.define('role',{
    
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps:false
    })  

    return role
    
} 


    