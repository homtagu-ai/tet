'use client'

import { useEffect, useRef } from 'react'

export default function MapboxMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<any>(null)

  useEffect(() => {
    if (map.current || !mapContainer.current) return // Initialize map only once

    // Load Mapbox script
    const script = document.createElement('script')
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js'
    script.async = true
    
    script.onload = () => {
      const mapboxgl = (window as any).mapboxgl
      
      if (!mapboxgl) return

      mapboxgl.accessToken = 'pk.eyJ1IjoiaHVnaHNpbHZhOTEiLCJhIjoiY21obTQ1azJhMjFkcTJycjRjZDU0ZGF2YyJ9.FsG9K_psV3D0INZBRYz0yg'

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [0, 30],
        zoom: 1.5,
        projection: 'mercator'
      })

      const offices = [
        {
          name: 'New York - Global HQ',
          coordinates: [-73.9819, 40.7484],
          address: '350 Fifth Avenue, Suite 7800, New York, NY 10118',
          phone: '+1 (212) 555-1234',
          color: '#3b82f6'
        },
        {
          name: 'San Francisco Office',
          coordinates: [-122.3988, 37.7897],
          address: '575 Market Street, Suite 2750, San Francisco, CA 94105',
          phone: '+1 (415) 555-0198',
          color: '#3b82f6'
        },
        {
          name: 'London Office',
          coordinates: [-0.0194, 51.5048],
          address: '1 Canada Square, Canary Wharf, London E14 5AA, UK',
          phone: '+44 20 7946 0958',
          color: '#3b82f6'
        },
        {
          name: 'Singapore Office',
          coordinates: [103.8501, 1.2847],
          address: '1 Raffles Place, #40-02, Singapore 048616',
          phone: '+65 6789 1234',
          color: '#3b82f6'
        },
        {
          name: 'São Paulo Office',
          coordinates: [-46.6583, -23.5613],
          address: 'Av. Paulista, 1374, 5º andar, São Paulo, SP 01310-100',
          phone: '+55 11 3456-7890',
          color: '#3b82f6'
        }
      ]

      map.current.on('load', () => {
        offices.forEach(office => {
          const el = document.createElement('div')
          el.className = 'custom-marker'
          el.style.backgroundColor = office.color
          el.style.width = '32px'
          el.style.height = '32px'
          el.style.borderRadius = '50%'
          el.style.border = '3px solid white'
          el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)'
          el.style.cursor = 'pointer'
          el.style.display = 'flex'
          el.style.alignItems = 'center'
          el.style.justifyContent = 'center'
          
          el.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>'

          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div style="padding: 8px;">
              <h3 style="font-weight: bold; margin-bottom: 8px; color: #1e293b;">${office.name}</h3>
              <p style="margin: 4px 0; font-size: 13px; color: #475569;">${office.address}</p>
              <p style="margin: 4px 0; font-size: 13px; color: #3b82f6;">${office.phone}</p>
            </div>`
          )

          new mapboxgl.Marker(el)
            .setLngLat(office.coordinates)
            .setPopup(popup)
            .addTo(map.current)
        })

        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')
        map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right')
      })
    }

    document.head.appendChild(script)

    // Load Mapbox CSS
    const link = document.createElement('link')
    link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [])

  return <div ref={mapContainer} style={{ width: '100%', height: '480px' }} />
}

