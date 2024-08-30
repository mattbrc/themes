import * as React from "react";
import { DefaultThemes } from "./default-themes";
import { BadgeShowcase } from "./badges";
import { ButtonShowcase } from "./buttons";
import { Component as BarChart } from "./bar-chart";
import { Component as PieChart } from "./pie-chart";
import { CardWithForm } from "./card";
import { CalendarDemo } from "./cal";
import { DemoPaymentMethod } from "./payment";

export function Dashboard() {
  return (
    <div className="p-4 w-full max-w-7xl mx-auto">
      <DefaultThemes />
      <h1 className="text-2xl font-bold mb-6">Component Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <section className="col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold mb-2">Badges</h2>
          <BadgeShowcase />
        </section>
        <section className="col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold mb-2">Buttons</h2>
          <ButtonShowcase />
        </section>
        <section className="col-span-1 md:col-span-2 lg:col-span-1">
          <BarChart />
        </section>
        <section className="col-span-1 md:col-span-2 lg:col-span-1">
          <PieChart />
        </section>
        <section className="col-span-1 md:col-span-2 lg:col-span-1">
          <CardWithForm />
        </section>
        <section className="col-span-1 md:col-span-1 lg:col-span-1 flex justify-center">
          <div className="w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-2">Calendar</h2>
            <CalendarDemo />
          </div>
        </section>
        <section className="col-span-1 md:col-span-1 lg:col-span-2 flex justify-center">
          <div className="w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
            <DemoPaymentMethod />
          </div>
        </section>
      </div>
    </div>
  );
}
