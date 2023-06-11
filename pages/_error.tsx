function Error() {
  return <p>Error</p>;
}

Error.getInitialProps = () => {
  const statusCode = 500;
  return { statusCode };
};

export default Error;
