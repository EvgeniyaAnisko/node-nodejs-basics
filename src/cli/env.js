const PREFIX = "RSS_";
const BINDER = "=";
const SEPARATOR = "; ";

const parseEnv = () => {
  const rssProps = Object.entries(process.env)
    .reduce((acc, [key, value]) => {
      if (key.startsWith(PREFIX)) {
        return [...acc, `${key}${BINDER}${value}`];
      }
      return acc;
    }, [])
    .join(SEPARATOR);

  console.log(rssProps);
};

parseEnv();