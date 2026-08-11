import { login, signup } from './actions'
import { ArrowLeft, KeyRound, Mail, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default async function LoginPage(props: { searchParams: Promise<{ message: string }> }) {
  const searchParams = await props.searchParams;
  const message = searchParams.message;

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Tracker
        </Link>
        
        <div className="glass-panel p-8 doomsday-glow">
          <div className="text-center mb-8">
            <h1 className="font-heading text-3xl font-bold uppercase tracking-wider mb-2">
              DOOMSDAY <span className="text-doomsday-green">ACCESS</span>
            </h1>
            <p className="text-sm text-muted-foreground">Sign in or create an account to sync your progress.</p>
          </div>

          {message && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>{message}</p>
            </div>
          )}

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground ml-1" htmlFor="email">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className="w-full bg-muted/50 border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-doomsday-green transition-colors"
                  placeholder="nick.fury@shield.gov"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground ml-1" htmlFor="password">Password</label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  required 
                  className="w-full bg-muted/50 border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-doomsday-green transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <button 
                formAction={login}
                className="w-full bg-doomsday-green hover:bg-doomsday-dark-green text-white rounded-xl py-2.5 font-bold transition-colors shadow-lg shadow-doomsday-green/20"
              >
                Sign In
              </button>
              <button 
                formAction={signup}
                className="w-full bg-transparent border border-border hover:border-doomsday-green hover:text-doomsday-green text-muted-foreground rounded-xl py-2.5 font-bold transition-colors"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
