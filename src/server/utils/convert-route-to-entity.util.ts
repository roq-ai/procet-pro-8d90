const mapping: Record<string, string> = {
  courses: 'course',
  organizations: 'organization',
  prompts: 'prompt',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
