
const GetAPiKeys = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Get Your API Key</h2>
      
      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <p className="text-blue-800 font-medium">
            Follow these steps to obtain your API key for using the extensions:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Step 1: Access API Settings</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <img 
                src="https://res.cloudinary.com/dc3mdr2ol/image/upload/v1769240963/Screenshot_2026-01-24_131902_rrmxir.png" 
                alt="API Settings Screenshot" 
                className="w-full h-auto rounded border shadow-sm"
              />
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Navigate to your account settings</li>
              <li>• Look for "API Keys" or "Developer Settings"</li>
              <li>• Click on "Generate New API Key"</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Step 2: Copy Your Key</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <img 
                src="https://res.cloudinary.com/dc3mdr2ol/image/upload/v1769240878/1_u4copm.png" 
                alt="API Key Generation" 
                className="w-full h-auto rounded border shadow-sm"
              />
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Copy the generated API key</li>
              <li>• Store it securely</li>
              <li>• Use it in your extension configuration</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-yellow-800">Important Security Note</h4>
              <p className="mt-1 text-sm text-yellow-700">
                Keep your API key secure and never share it publicly. Treat it like a password.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetAPiKeys