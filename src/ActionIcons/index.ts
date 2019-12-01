const publicUrl = process.env.PUBLIC_URL;

export default (actionName: string): string => {
  const iconKey = actionName.replace(/\s/g, "");
  return `${publicUrl}/images/${iconKey}.png`;
};
