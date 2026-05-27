export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Android",
    icon: "Smartphone",
    skills: ["Kotlin", "Jetpack Compose", "Android SDK", "Material 3", "ViewModel", "Lifecycle"]
  },
  {
    title: "Architecture",
    icon: "Code2",
    skills: ["Clean Architecture", "MVVM", "MVI", "Hilt", "Modularization", "Coroutines", "Flow"]
  },
  {
    title: "Data & Persistence",
    icon: "Database",
    skills: ["Room", "Retrofit", "Ktor", "SQLite", "DataStore", "REST APIs", "GraphQL"]
  },
  {
    title: "Tools & CI/CD",
    icon: "Cloud",
    skills: ["Firebase", "GitHub Actions", "Fastlane", "Gradle", "Git", "Docker"]
  }
];
