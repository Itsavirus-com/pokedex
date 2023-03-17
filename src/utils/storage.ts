export const generateClassNames = (
  rootClassName: string,
  classNames: string[]
): string => {
  if (!classNames.length) return rootClassName;

  const filteredClassNames = classNames.filter((className) => !!className);

  return [rootClassName, ...filteredClassNames].join(" ");
};
