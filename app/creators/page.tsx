import Navbar from "@/components/navigation/Navbar";
import SidebarLeft from "@/components/Sidebars/Sidebar-left";
import Hero from "@/components/creators/Hero";
import Filters from "@/components/creators/Filters";
import CreatorGrid from "@/components/creators/CreatorGrid";

export default function CreatorsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* NAVBAR - Fixed at top */}
      <Navbar />

      {/* MAIN LAYOUT with Sidebar */}
      <div className="flex pt-16 h-[calc(100vh-4rem)]">
        {/* LEFT SIDEBAR - Fixed, No Scroll */}
        <div className="hidden md:block fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-hidden">
          <SidebarLeft />
        </div>

        {/* SCROLLABLE CONTENT - Hidden scrollbar + smooth scroll */}
        <div className="flex-1 overflow-y-scroll md:ml-64 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Hero />
          <Filters />
          <CreatorGrid />
        </div>
      </div>
    </div>
  );
}