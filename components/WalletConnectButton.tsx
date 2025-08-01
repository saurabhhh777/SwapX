import { useAccount, useConnect, useDisconnect } from 'wagmi';

export default function WalletConnectButton() {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <button 
        onClick={() => disconnect()}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        {address?.slice(0, 6)}...{address?.slice(-4)}
      </button>
    );
  }

  return (
    <div className="relative group">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Connect Wallet
      </button>
      <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-1">
        {connectors.map((connector: any) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            {connector.name}
          </button>
        ))}
      </div>
    </div>
  );
}