export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      name: "Audit",
      desc: "Analyze brand positioning, target audience, and current performance to establish a clear baseline.",
    },
    {
      number: "02",
      name: "Strategy",
      desc: "Develop tailored marketing and content strategies aligned with your business objectives.",
    },
    {
      number: "03",
      name: "Execute",
      desc: "Implement campaigns across platforms with structured workflows and disciplined execution.",
    },
    {
      number: "04",
      name: "Measure",
      desc: "Monthly reporting, strategy refinement, and continuous improvement based on real data.",
    },
  ];
  return (
    <section
      id="process"
      className="w-full bg-[#F5F2EB] py-24 md:py-32 scroll-mt-16"
    >
      {" "}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {" "}
        {/* Header */}{" "}
        <div className="mb-16 flex flex-col gap-10 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          {" "}
          <div>
            {" "}
            <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A]">
              {" "}
              <span className="inline-block h-px w-[30px] bg-[#F5C400]" /> Our
              Process{" "}
            </div>
            <h2 className="max-w-[540px] text-[40px] font-extrabold leading-none tracking-[-0.03em] text-[#1A1A1A] md:text-[56px]">
              {" "}
              Your Ambition.{" "}
            </h2>{" "}
          </div>
          <p className="max-w-[300px] text-[15px] leading-[1.7] text-[#9A9A9A]">
            {" "}
            Conversion-focused systems built to create measurable growth. <br />{" "}
            <br /> A clear process helps turn creative execution into business
            outcomes.{" "}
          </p>{" "}
        </div>
        {/* Steps */}{" "}
        <div className="relative grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
          {" "}
          {/* top dashed line desktop */}{" "}
          <div className="absolute left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] top-6 hidden h-px xl:block bg-[repeating-linear-gradient(90deg,#F5C400_0,#F5C400_6px,transparent_6px,transparent_14px)]" />
          {steps.map((step) => (
            <div key={step.number} className="relative xl:pr-8">
              {" "}
              <div className="relative z-10 mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5C400] text-[13px] font-bold text-[#1A1A1A] transition duration-300 hover:scale-110 hover:shadow-[0_8px_24px_rgba(245,196,0,0.4)]">
                {" "}
                {step.number}{" "}
              </div>
              <h3 className="mb-3 text-[20px] font-bold text-[#1A1A1A]">
                {" "}
                {step.name}{" "}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#9A9A9A]">
                {" "}
                {step.desc}{" "}
              </p>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
