interface ProjectStack {
  name: string;
}

export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: ProjectStack[];
  image: any; // Assuming Image is another interface/type in your project, or you can use any specific type.
  live: string;
  github: string;
}

// Example Image interface, you might already have this defined elsewhere:
interface Image {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}
