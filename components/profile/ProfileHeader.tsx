"use client";

export default function ProfileHeader({ user, postsCount }: any) {
  return (
    <section className="bg-[#111] rounded-2xl border border-white/10 overflow-hidden">

      <div className="h-40 bg-gradient-to-r from-orange-500/40 to-purple-600/40" />

      <div className="px-6 pb-6">
        <div className="-mt-12 flex items-end gap-4">

          <img
            src={user.avatarUrl}
            className="w-24 h-24 rounded-full border-4 border-black object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-400 text-sm">@{user.username}</p>
          </div>
        </div>

        <p className="mt-4 text-gray-300 max-w-xl">
          {user.bio || "No bio added yet."}
        </p>

        <div className="flex gap-6 mt-4 text-sm">
          <span><b>{postsCount}</b> Posts</span>
          <span><b>{user.followersCount || 0}</b> Followers</span>
          <span><b>{user.followingCount || 0}</b> Following</span>
        </div>

      </div>
    </section>
  );
}
