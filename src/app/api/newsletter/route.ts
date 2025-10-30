import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate input
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Implement actual newsletter subscription logic here
    // For now, just log the email (in production, use a service like Mailchimp, ConvertKit, or Klaviyo)
    console.log('Newsletter subscription:', { email });

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // In production, you would subscribe the user to your newsletter service:
    /*
    await subscribeToNewsletter({
      email: email,
      tags: ['website-signup'],
      source: 'blog-page'
    });
    */

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}

