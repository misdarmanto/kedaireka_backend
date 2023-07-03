import { Express, Request, Response } from "express";
import { index } from "../controllers";
import { semesterRoutes } from "./semester-route";
import { RecomendationLetterRoutes } from "./recomendation-letter-route";
import { userRoutes } from "./user-router";
import { reportParticipationRoutes } from "./report-participation-route";
import { mbkmProgramRoutes } from "./mbkm-program";
import { mbkmProgramStudentRoutes } from "./mbkm-program-student";
import { sksConvertionRoutes } from "./sks-convertion-route";
import { studentRoutes } from "./student-route";
import { studyProgramRoutes } from "./study-program";
import { departmentRoutes } from "./department-route";
import { academicRoutes } from "./academic-route";
import { lp3mRoutes } from "./lp3m-route";
import { summaryRoutes } from "./summary";
import { logBookRoute } from "./log-book-route";
import { mataKuliahRoute } from "./mata-kuliah-route";
import { transkripRoute } from "./transkrip-route";
import { mbkmProgramProdiRoutes } from "./mbkm-program-prodi";

export const route = (app: Express) => {
	app.get("/", (req: Request, res: Response) => index(req, res));
	userRoutes(app);
	RecomendationLetterRoutes(app);
	semesterRoutes(app);
	reportParticipationRoutes(app);
	mbkmProgramRoutes(app);
	mbkmProgramStudentRoutes(app);
	sksConvertionRoutes(app);
	mbkmProgramRoutes(app);
	studentRoutes(app);
	studyProgramRoutes(app);
	departmentRoutes(app);
	academicRoutes(app);
	lp3mRoutes(app);
	summaryRoutes(app);
	logBookRoute(app);
	mataKuliahRoute(app);
	transkripRoute(app);
	mbkmProgramProdiRoutes(app);
};
