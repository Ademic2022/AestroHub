export const getTimeDifference = (createdAt) => {
  const currentTime = new Date();
  const commentTime = new Date(createdAt);
  const timeDifference = currentTime.getTime() - commentTime.getTime();
  const secondsDifference = Math.floor(timeDifference / 1000);

  if (secondsDifference < 60) {
    return `${secondsDifference} second${
      secondsDifference !== 1 ? "s" : ""
    } ago`;
  } else if (secondsDifference < 3600) {
    const minutes = Math.floor(secondsDifference / 60);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (secondsDifference < 86400) {
    const hours = Math.floor(secondsDifference / 3600);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (secondsDifference < 2592000) {
    // 30 days
    const days = Math.floor(secondsDifference / 86400);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (secondsDifference < 31536000) {
    // 365 days
    const months = Math.floor(secondsDifference / 2592000);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(secondsDifference / 31536000);
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  }
};
