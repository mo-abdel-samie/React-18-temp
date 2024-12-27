import React from "react";
import { useParams } from "react-router-dom";

export default function Course() {
  const { courseId } = useParams();

  return <div>Course {courseId}</div>;
}