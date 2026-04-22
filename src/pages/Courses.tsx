import Header from "@/components/Header";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
