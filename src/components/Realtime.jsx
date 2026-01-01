import { useState, useEffect, useRef } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function CryptoMarketTicker() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetchCryptoData();
    // Refresh data every 60 seconds
    const interval = setInterval(fetchCryptoData, 60000);
    return () => clearInterval(interval);
  }, []);

  const fetchCryptoData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h'
      );
      const data = await response.json();
      setCryptoData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    if (price < 1) return `$${price.toFixed(4)}`;
    if (price < 100) return `$${price.toFixed(2)}`;
    return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatMarketCap = (marketCap) => {
    if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`;
    if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
    if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
    return `$${marketCap.toLocaleString()}`;
  };

  if (loading) {
    return (
      <div className="bg-gray-900 text-white py-3 px-4">
        <div className="flex items-center justify-center">
          <div className="animate-pulse">Loading market data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden border-y border-gray-700">
      <div className="relative">
        {/* Scrolling container */}
        <div className="flex animate-scroll" ref={scrollRef}>
          {/* First set of items */}
          {cryptoData.map((crypto) => (
            <div
              key={`${crypto.id}-1`}
              className="flex items-center gap-3 px-6 py-3 whitespace-nowrap flex-shrink-0"
            >
              {/* Crypto Icon & Symbol */}
              <div className="flex items-center gap-2">
                <img 
                  src={crypto.image} 
                  alt={crypto.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="font-bold text-sm">{crypto.symbol.toUpperCase()}</span>
              </div>

              {/* Price */}
              <span className="text-sm font-semibold">
                {formatPrice(crypto.current_price)}
              </span>

              {/* Price Change */}
              <div className={`flex items-center gap-1 text-xs font-medium ${
                crypto.price_change_percentage_24h >= 0 
                  ? 'text-green-400' 
                  : 'text-red-400'
              }`}>
                {crypto.price_change_percentage_24h >= 0 ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                <span>
                  {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                </span>
              </div>

              {/* Market Cap */}
              <span className="text-xs text-gray-400">
                MCap: {formatMarketCap(crypto.market_cap)}
              </span>

              {/* Divider */}
              <div className="w-px h-6 bg-gray-700 ml-3"></div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {cryptoData.map((crypto) => (
            <div
              key={`${crypto.id}-2`}
              className="flex items-center gap-3 px-6 py-3 whitespace-nowrap flex-shrink-0"
            >
              <div className="flex items-center gap-2">
                <img 
                  src={crypto.image} 
                  alt={crypto.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="font-bold text-sm">{crypto.symbol.toUpperCase()}</span>
              </div>
              <span className="text-sm font-semibold">
                {formatPrice(crypto.current_price)}
              </span>
              <div className={`flex items-center gap-1 text-xs font-medium ${
                crypto.price_change_percentage_24h >= 0 
                  ? 'text-green-400' 
                  : 'text-red-400'
              }`}>
                {crypto.price_change_percentage_24h >= 0 ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                <span>
                  {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                </span>
              </div>
              <span className="text-xs text-gray-400">
                MCap: {formatMarketCap(crypto.market_cap)}
              </span>
              <div className="w-px h-6 bg-gray-700 ml-3"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Last Updated Info */}
      <div className="bg-gray-950 text-gray-500 text-xs py-1 px-4 text-center">
         Updates every 60 seconds
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}