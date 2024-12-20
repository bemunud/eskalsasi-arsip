export default function ResponsiveEmbedIssuu() {
  return (
    <div className="relative w-full">
      {/* Wrapper dengan rasio default (16:9) */}
      <div className="relative pb-[100vh] md:pb-[75%] lg:pb-[56.25%]">
        <iframe
          src="https://heyzine.com/flip-book/c3fb00f2b5.html"
          className="absolute top-0 left-0 w-full h-full border-none"
          allowFullScreen
          title="Responsive Issuu Document"
        ></iframe>
      </div>
    </div>
  );
}
