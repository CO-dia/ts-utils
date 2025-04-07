const pluralize = (word: string, count: number, plural = word + "s") =>
  `${count} ${count === 1 ? word : plural}`;
