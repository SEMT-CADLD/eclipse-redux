import { Star, Users } from "lucide-react";

const courses = [
  { title: "Web Development", category: "Development", students: 120, rating: 4.8, price: "$49" },
  { title: "UI/UX Design", category: "Design", students: 98, rating: 4.9, price: "$39" },
  { title: "Data Science", category: "Data", students: 85, rating: 4.7, price: "$59" },
  { title: "Digital Marketing", category: "Marketing", students: 150, rating: 4.6, price: "$29" },
  { title: "Mobile App Dev", category: "Development", students: 110, rating: 4.8, price: "$55" },
  { title: "Machine Learning", category: "Data", students: 72, rating: 4.9, price: "$69" },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-4 block">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore Popular Courses
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-hero-gradient relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-foreground/5 group-hover:bg-primary-foreground/0 transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-foreground/20 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                    {course.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{course.price}</span>
                  <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                    Enroll Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
