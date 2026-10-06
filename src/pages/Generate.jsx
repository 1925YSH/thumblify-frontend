import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/react";
import Layout from "../components/Layout";

const Generate = () => {
  const { getToken } = useAuth();
  const { user } = useUser();
  const [synced, setSynced] = useState(false);
  
  // Form State
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [style, setStyle] = useState("realistic");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);

  useEffect(() => {
    const syncUser = async () => {
      if (!user) return;
      try {
        const token = await getToken();
        const primaryEmail = user.primaryEmailAddress?.emailAddress;

        const res = await fetch("http://localhost:5000/api/users/sync", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ email: primaryEmail }),
        });

        if (res.ok) {
          setSynced(true);
        }
      } catch (error) {
        console.error("Error syncing user:", error);
      }
    };

    syncUser();
  }, [user, getToken]);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt");
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const token = await getToken();
      const res = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ prompt, aspectRatio, style }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Failed to generate thumbnail");
      }

      setGeneratedImage(data.generation.imageUrl);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen pt-24 px-6 max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-8">
          AI Thumbnail Generator
        </h1>

        <div className="w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
          {/* Prompt Input */}
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              What do you want to create?
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all resize-none"
              rows="4"
              placeholder="E.g., A cinematic shot of a futuristic cyberpunk city at night with neon lights..."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Aspect Ratio */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Aspect Ratio
              </label>
              <select 
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value)}
                className="w-full bg-black/30 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none"
              >
                <option value="16:9">YouTube (16:9)</option>
                <option value="9:16">Shorts/TikTok (9:16)</option>
                <option value="1:1">Instagram (1:1)</option>
              </select>
            </div>

            {/* Style */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Style
              </label>
              <select 
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-black/30 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none"
              >
                <option value="realistic">Hyper-Realistic</option>
                <option value="3d">3D Render (Pixar Style)</option>
                <option value="anime">Anime / Manga</option>
                <option value="neon">Neon Cyberpunk</option>
              </select>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mb-4 text-center font-medium">{error}</p>}

          {/* Generate Button */}
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className={`w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold text-lg py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(236,72,153,0.3)]
              ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}
            `}
          >
            <span>{loading ? "Generating Magic..." : "Generate Thumbnail"}</span>
            {!loading && <span className="text-sm font-normal opacity-80">(Cost: 1 Credit)</span>}
          </button>
        </div>

        {/* Result Area */}
        {generatedImage && (
          <div className="mt-12 w-full max-w-4xl p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-6">Your Masterpiece</h2>
            <img src={generatedImage} alt="Generated Thumbnail" className="w-full rounded-xl shadow-2xl object-contain" />
            <a 
              href={generatedImage} 
              target="_blank" 
              rel="noreferrer"
              className="mt-6 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition"
            >
              Download Full Resolution
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Generate;
