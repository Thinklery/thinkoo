export function getFriends(): Promise<
  { id: string; display_name: string; friend_code: string }[]
> {
  // Placeholder implementation
  return Promise.resolve([
    { id: "1", display_name: "Alice" },
    { id: "2", display_name: "Bob" },
  ]);
}

export async function sendFriendRequest(code: string): Promise<void> {
  // Placeholder implementation
  console.log(`Sending friend request to code: ${code}`);
  return Promise.resolve();
}

export async function getUserDetails(): Promise<{
  uuid: string;
}> {
  // Placeholder implementation
  return Promise.resolve({
    uuid: "123e4567-e89b-12d3-a456-426614174000",
  });
}
