import { el, div, span, a, tr, td } from "quickelement";

const output = document.getElementById("output");

// --- basic element with a class and text content ---
const greeting = div("card", {}, "Hello from quickelement!");
output.appendChild(greeting);

// --- nested elements built with el() ---
const tags = div("card", {}, [
  span(null, {}, "Tags: "),
  span("tag", {}, "tag"),
  span(["tag", "blue"], {}, "blue"),
  span(["tag", "green"], {}, "green"),
]);
output.appendChild(tags);

// --- anchor element ---
const link = div("card", {}, [
  a(
    null,
    { href: "https://github.com/liquidx/quickelement" },
    "View on GitHub",
  ),
]);
output.appendChild(link);

// --- table built from data ---
const people = [
  { name: "Alice", role: "Engineer" },
  { name: "Bob", role: "Designer" },
  { name: "Carol", role: "Manager" },
];

const table = el("table");
for (const person of people) {
  table.appendChild(
    tr(null, {}, [td(null, {}, person.name), td(null, {}, person.role)]),
  );
}

const tableCard = div("card");
tableCard.appendChild(table);
output.appendChild(tableCard);
