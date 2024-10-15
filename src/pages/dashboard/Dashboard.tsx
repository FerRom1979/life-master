import { mockGoals } from "@/mock-data/goals";
import React from "react";

import Card from "@/components/ui/Card";

function Dashboard() {
  const { daily } = mockGoals || [];

  return (
    <div className="p-4">
      <div>
        <h2 className="mb-4 text-2xl font-medium">Daily&apos;s</h2>
        <div className="flex flex-col gap-y-4">
          {daily?.map((notes) => {
            const { title, id, subTitle, priority } = notes;
            return <Card key={id} title={title} id={id} subTitle={subTitle} priority={priority} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
