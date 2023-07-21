import { Command } from "lucide-react";

import { Logo } from "@/components/atoms/Logo";

function getRandomInt() {
  return Math.floor(Math.random() * 4);
}

export default function BannerRotation() {
  const banners = [
    <>
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80)",
        }}
      />
      <div className="relative z-20 flex items-center text-lg font-medium">
        <Logo />
      </div>
      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-2">
          <footer className="text-sm">
            Photo by{" "}
            <a href="https://unsplash.com/es/@shootdelicious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Eiliv Aceron
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </footer>
        </blockquote>
      </div>
    </>,
    <>
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80)",
        }}
      />
      <div className="relative z-20 flex items-center text-lg font-medium">
        <Logo />
      </div>
      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-2">
          <footer className="text-sm">
            Photo by{" "}
            <a href="https://unsplash.com/@victoriakosmo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Victoria Shes
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </footer>
        </blockquote>
      </div>
    </>,
    <>
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1376&q=80)",
        }}
      />
      <div className="relative z-20 flex items-center text-lg font-medium">
        <Logo />
      </div>
      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-2">
          <footer className="text-sm">
            Photo by{" "}
            <a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Chad Montano
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </footer>
        </blockquote>
      </div>
    </>,
    <>
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80)",
        }}
      />
      <div className="relative z-20 flex items-center text-lg font-medium">
        <Logo />
      </div>
      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-2">
          <footer className="text-sm">
            Photo by{" "}
            <a href="https://unsplash.com/@anna_tukhfatullina?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Anna Tukhfatullina Food Photographer/Stylist
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </footer>
        </blockquote>
      </div>
    </>,
  ];

  return <>{banners[getRandomInt()]}</>;
}
