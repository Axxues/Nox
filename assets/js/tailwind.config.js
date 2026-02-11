tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
            colors: {
                nox: {
                    950: '#050507',
                    900: '#09090b',
                    800: '#121215',
                    accent: '#6366f1'
                }
            },
            backgroundImage: {
                'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')"
            },
            animation: {
                'blob': 'blob 10s infinite alternate',
                'shimmer': 'shimmer 3s infinite linear',
                'entry': 'entry 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'shake': 'shake 0.4s cubic-bezier(.36,.07,.19,.97) both'
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0, 0) scale(1)' },
                    '100%': { transform: 'translate(20px, -20px) scale(1.1)' }
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                entry: {
                    '0%': { opacity: '0', transform: 'scale(0.95) translateY(20px)' },
                    '100%': { opacity: '1', transform: 'scale(1) translateY(0)' }
                },
                shake: {
                    '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
                    '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
                    '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
                    '40%, 60%': { transform: 'translate3d(4px, 0, 0)' }
                }
            }
        }
    }
}