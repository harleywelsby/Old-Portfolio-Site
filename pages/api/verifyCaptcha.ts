import type { NextApiRequest, NextApiResponse } from "next";

// TODO: Currently unused but good to keep around for future changes/testing

// Handles verifying the reCAPTCHA with Google
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  const { captcha } = body;

  // Only allow POST
  if (method !== "POST") {
    return res.status(404).send("Not found");
  }

  try {
    // Connect to Google and send the secret
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${captcha}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        method: "POST",
      }
    );
    const captchaValidation = await response.json();

    // Captcha failed
    if (!captchaValidation.success) {
      return res.status(422).json({
        message: "Invalid Captcha",
      });
    }

    // Otherwise, Captcha was a success
    return res.status(200).send("OK");
  } catch (error) {
    return res.status(422).json({ message: "Something went wrong" });
  }
}
