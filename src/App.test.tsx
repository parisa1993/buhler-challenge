import { render, cleanup, screen } from "@testing-library/react";
import Navigation from "./components/Navigation";
import Overview from "./components/Overview";
import Production from "./pages/Production";

const machines = [
  {
    id: 1,
    name: "Scale",
    icon: "system_update_alt",
    state: 1,
  },
  {
    id: 2,
    name: "Attacher",
    icon: "wysiwyg",
    state: 2,
  },
  {
    id: 3,
    name: "Packer",
    icon: "inventory",
    state: 1,
  },
  {
    id: 4,
    name: "Closer",
    icon: "calendar_view_month",
    state: 3,
  },
];

afterEach(cleanup);

describe("production-line", () => {
  it("navigation displayed", () => {
    render(<Production />);
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });

  it("overview displayed", () => {
    render(<Production />);
    expect(screen.getByTestId("overview")).toBeInTheDocument();
  });

  it("sections shows in navigation", () => {
    render(<Navigation machines={machines} />);
    expect(screen.getByText(/scale/i)).toBeInTheDocument();
    expect(screen.getByText(/Attacher/i)).toBeInTheDocument();
    expect(screen.getByText(/Packer/i)).toBeInTheDocument();
    expect(screen.getByText(/Closer/i)).toBeInTheDocument();
  });

  it("icon section not shows in navigation", () => {
    render(<Navigation machines={machines} />);
    expect(screen.queryByTestId("section-icon")).toBeNull();
  });

  it("icon section shows in overview", () => {
    render(<Overview machines={machines} />);
    machines.map((item) => {
      expect(screen.queryByTestId(`section-icon-${item.id}`)).toBeVisible();
    });
  });
});
