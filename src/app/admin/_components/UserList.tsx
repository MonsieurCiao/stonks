import { prisma } from "@/lib/prisma";
import React from "react";

export default async function UserList() {
  const users = await prisma.post.findMany();
  return (
    <div>
      <ul>
        {users.map((user: any) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
