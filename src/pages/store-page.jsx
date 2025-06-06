import Course from "@/components/ui/course";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
const courses = [
  {
    title: "JavaScript: The Complete Guide",
    description:
      "Master JavaScript from basics to advanced concepts with practical exercises",
    price: 2450,
    rating: 4.8,
    label: "Bestseller",
    image:"https://th.bing.com/th/id/OIP.B1GepOD6wH9jAtUkVlUEcQHaEK?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  {
    title: "SQL Mastery E-Book",
    description:
      "From basic queries to advanced database management techniques",
    price: 1825,
    rating: 4.6,
     image:"https://th.bing.com/th/id/OIP.B1GepOD6wH9jAtUkVlUEcQHaEK?cb=iwp2&rs=1&pid=ImgDetMain"
 
  },
  {
    title: "Python for Data Science",
    description: "Learn Python with focus on data analysis and visualization",
    price: 2000,
    rating: 4.9,
    label: "20% Off",
    image:"https://i.ytimg.com/vi/m0LdKZ-prto/maxresdefault.jpg"
  },
  {
    title: "Python for Data Science",
    description: "Learn Python with focus on data analysis and visualization",
    price: 2000,
    rating: 4.9,
    label: "20% Off",
     image:"https://th.bing.com/th/id/OIP.B1GepOD6wH9jAtUkVlUEcQHaEK?cb=iwp2&rs=1&pid=ImgDetMain"
 
  },
  {
    title: "Python for Data Science",
    description: "Learn Python with focus on data analysis and visualization",
    price: 2000,
    rating: 4.9,
    label: "20% Off",
     image:"https://th.bing.com/th/id/OIP.B1GepOD6wH9jAtUkVlUEcQHaEK?cb=iwp2&rs=1&pid=ImgDetMain"
 
  },
  {
    title: "Python for Data Science",
    description: "Learn Python with focus on data analysis and visualization",
    price: 2000,
    rating: 4.9,
    label: "20% Off",
     image:"https://th.bing.com/th/id/OIP.B1GepOD6wH9jAtUkVlUEcQHaEK?cb=iwp2&rs=1&pid=ImgDetMain"
 
  },
];
const StorePage = () => {
  return (
    <div className="w-full px-4 md:px-8 bg-gray-50 min-h-screen ">
      <div className="max-w-full mx-auto">
        <h1 className="text-3xl font-bold mb-1">Store</h1>
        <p className="text-muted-foreground text-lg mb-4">
          Educational resources to accelerate your learning
        </p>
        <p className="font-semibold mb-6">
          🪙 Your balance: <span className="text-primary">2,540 coins</span>
        </p>
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-4 mb-6 w-full max-w-lg">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="ebooks">E-Books</TabsTrigger>
            <TabsTrigger value="exams">Practice Exams</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {courses.map((course, index) => (
                <Course key={index} {...course} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="exams">
            <div className="text-muted-foreground text-center p-6">
              No practice exams available yet.
            </div>
          </TabsContent>
          <TabsContent value="courses">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {courses
                .filter((c) => !c.title.toLowerCase().includes("e-book"))
                .map((course, index) => (
               <Course key={index} {...course} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StorePage;


