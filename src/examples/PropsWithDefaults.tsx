const defaultProps = {
  message: 'default message',
}

const Test: React.FC<{ message?: string, go: number }> = (props) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props,
  }

  const { message, go } = propsWithDefaults;

  return (
    <div>
      <div>Message: {message}</div>
      <div>go: {go}</div>
    </div>
  );
}

export default Test;