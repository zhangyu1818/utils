import excludedEvent from "./index";

describe("excludedEvent", () => {
  let e1: HTMLDivElement;
  let e2: HTMLDivElement;
  let e3: HTMLDivElement;
  let e4: HTMLDivElement;
  beforeEach(() => {
    e1 = document.createElement("div");
    e2 = document.createElement("div");
    e3 = document.createElement("div");
    e4 = document.createElement("div");
    e1.setAttribute("id", "e1");
    e1.appendChild(e2);
    e3.appendChild(e1);
    document.body.append(e1, e3, e4);
  });
  afterEach(() => {
    document.body.removeChild(e1);
    document.body.removeChild(e3);
    document.body.removeChild(e4);
  });
  it("should be defined", () => {
    expect(excludedEvent).toBeDefined();
  });
  it("use querySelector", () => {
    let value = 0;
    document.onclick = excludedEvent(() => {
      value++;
    }, "#e1");
    e1.click();
    expect(value).toBe(0);
    e2.click();
    expect(value).toBe(0);
    e3.click();
    expect(value).toBe(1);
    e4.click();
    expect(value).toBe(2);
    document.body.click();
    expect(value).toBe(3);
  });
  it("use element", () => {
    let value = 0;
    document.onclick = excludedEvent(() => {
      value++;
    }, e1);
    e1.click();
    expect(value).toBe(0);
    e2.click();
    expect(value).toBe(0);
    e3.click();
    expect(value).toBe(1);
  });
});
