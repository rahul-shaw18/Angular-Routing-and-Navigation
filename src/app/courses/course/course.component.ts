import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoursesService } from "src/app/Services/courses.service";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
})
export class CourseComponent implements OnInit {
  public course;
  public courseId;
  RouteParamObserable;

  editMode: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private courseService: CoursesService
  ) {}

  ngOnInit(): void {
    this.RouteParamObserable = this.activatedRoute.paramMap.subscribe(
      (param) => {
        this.courseId = param.get("id");
        this.course = this.courseService.courses.find(
          (x) => x.id == this.courseId
        );
      }
    );
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.editMode = Boolean(params.get("edit"));
    });
  }

  ngOnDestroy() {
    this.RouteParamObserable.unsubscribe();
  }

  enableEditMode() {
    this.router.navigate(["/Courses/Course", this.courseId], {
      queryParams: { edit: true },
    });
  }
}
