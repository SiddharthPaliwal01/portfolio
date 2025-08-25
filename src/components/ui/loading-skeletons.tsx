import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted/50",
        className
      )}
      {...props}
    />
  );
};

// Project Card Skeleton
const ProjectCardSkeleton = () => (
  <div className="bg-card rounded-2xl p-6 shadow-medium border space-y-4">
    <div className="space-y-3">
      <Skeleton className="h-48 w-full rounded-xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-6 w-20 rounded-full" />
      <Skeleton className="h-6 w-14 rounded-full" />
    </div>
    <div className="flex gap-4 pt-2">
      <Skeleton className="h-10 w-24 rounded-lg" />
      <Skeleton className="h-10 w-20 rounded-lg" />
    </div>
  </div>
);

// Hero Section Skeleton
const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
          </div>
          <div className="space-y-3">
            <Skeleton className="h-16 w-full rounded-xl" />
            <Skeleton className="h-16 w-full rounded-xl" />
          </div>
          <div className="flex gap-4">
            <Skeleton className="h-12 w-32 rounded-lg" />
            <Skeleton className="h-12 w-28 rounded-lg" />
          </div>
        </div>
        <div className="flex justify-center">
          <Skeleton className="w-80 h-96 rounded-2xl" />
        </div>
      </div>
    </div>
  </div>
);

export { Skeleton, ProjectCardSkeleton, HeroSkeleton };
