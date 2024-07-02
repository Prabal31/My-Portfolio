export interface Personal { 
    first: string; 
    last: string; 
    image: string;
    occupation: string;
    description: string
    about: string
}
export interface Links {
    Linkedin: string; 
    GitHub: String; 
    Email: string
}
export interface Project {
    name: string;
    image: string;
    technology_used: string;
    details: string;
    github_link: string;
}
export interface Experience{
    Company_name: string; 
    Position: string; 
    Time_frame: string;
    Company_logo: string;
    Company_link: string;
    Point1: string;
    Point2: string;
    Point3: string;
    Point4: string;
    Point5: string;
}

export interface Certificate{
    Name: string;
    pdf: string;
}