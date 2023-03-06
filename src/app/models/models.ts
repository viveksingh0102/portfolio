export interface graduation{
    institute:string;
    course:string;
    duration:string;
    grade:string;
}

export interface school{
    board:string;
    school:string
    grade:string;
    duration:string;
    subject:string
}


export interface workexp{
    role:string;
    company:string;
    duration:string;
    desc:string[];
}

export interface skills{
    name:string;
    // level:string;
    rating:number
}

export interface projects{
    title:string;
    technologies:string;
    desc:string[];
}