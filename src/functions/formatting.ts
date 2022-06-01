export function formatProjectName(clientName: string, startDate: string): string {
    const startDateSplit = startDate.split(' ')
    const startMonth = startDateSplit[1];
    const startYear = startDateSplit[3];
    const projectName = `${clientName} (${startMonth} ${startYear})`;
    return projectName
}