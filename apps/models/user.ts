import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteAttributes, ZygoteModel } from "./zygote";

export interface UserAttributes extends ZygoteAttributes {
	user_id: string;
	user_name: string;
	user_email: string;
	user_role: "student" | "study_program" | "department" | "lp3m" | "academic";
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type UserCreationAttributes = Optional<
	UserAttributes,
	"id" | "created_on" | "modified_on"
>;

// We need to declare an interface for our model that is basically what our class would be
interface UserInstance
	extends Model<UserAttributes, UserCreationAttributes>,
		UserAttributes {}

export const UserModel = sequelize.define<UserInstance>(
	"user",
	{
		...ZygoteModel,
		user_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_role: {
			type: DataTypes.ENUM(
				"student",
				"study_program",
				"department",
				"lp3m",
				"academic"
			),
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "user",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);
