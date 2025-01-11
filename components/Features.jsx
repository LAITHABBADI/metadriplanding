import React from 'react'
import { BarChart3, Settings, Lock, Rocket } from 'lucide-react'

const features = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic and sales with detailed analytics and reporting.',
    icon: BarChart3
  },
  {
    name: 'Advanced Security',
    description: 'Your customers\' data will be safe and secure with enterprise-level security features.',
    icon: Lock
  },
  {
    name: 'Easy Configuration',
    description: 'Easily configure your application settings through our intuitive dashboard.',
    icon: Settings
  },
  {
    name: 'Quick Deployment',
    description: 'Deploy your application to production in minutes with our streamlined deployment process.',
    icon: Rocket
  }
]

function Features() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get your application from development to production with our comprehensive set of tools and features.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="flex-none w-5 h-5 text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features
