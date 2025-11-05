"use client";

import TodoList from "@/components/todo/TodoList";
import { Card, CardContent } from "@/components/ui/card";
import ProtectedRoute from "@/components/ProtectedRoute";
import TodoFilters from "@/components/todo/TodoFilters";

export default function Home() {
  return (
    <ProtectedRoute>
      <Card className="w-full max-w-md p-4">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4 text-center">
            All Tasks
          </h1>
          <TodoFilters />
          <TodoList />
        </CardContent>
      </Card>
    </ProtectedRoute>
  );
}
