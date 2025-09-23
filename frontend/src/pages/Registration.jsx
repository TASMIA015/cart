import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/final icon.png';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


function Registration() {
  const navigate = useNavigate();

  // 🔹 State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: 'linear-gradient(to left, #141414, #0c2025)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Top bar */}
      <div
        style={{
          width: '100%',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '140px',
          paddingRight: '120px',
          columnGap: '10px',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        <img src={Logo} alt="Logo" style={{ width: '40px' }} />
        <h1
          style={{
            fontSize: '26px',
            fontFamily: 'sans-serif',
            fontWeight: '600',
            margin: 0,
          }}
        >
          CampusCart
        </h1>
      </div>

      {/* Registration Content */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '10px',
        }}
      >
        {/* Page Title */}
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '0px',
          }}
        >
          Registration Page
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '18px',
            marginBottom: '40px',
          }}
        >
          Welcome to CampusCart
        </p>

        {/* Shadow Box */}
        <div
          style={{
            width: '400px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            borderRadius: '10px',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            color: 'black', // text inside white box
          }}
        >
          {/* Register with Google Button */}
          <button
            style={{
              backgroundColor: '#0d3b35', // new color
              color: 'white',
              padding: '12px',
              fontSize: '16px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Register with Google
          </button>

          {/* OR text */}
          <div
            style={{
              textAlign: 'center',
              color: '#3F726B',
              margin: '10px 0',
            }}
          >
            OR
          </div>

          {/* Username input */}
          <input
            type="text"
            placeholder="Username"
            style={{
              padding: '10px',
              fontSize: '15px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />

          {/* Email input */}
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: '10px',
              fontSize: '15px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />

          {/* Password input with eye icon */}
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              style={{
                padding: '10px 40px 10px 10px', // extra right padding for icon
                fontSize: '15px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            {showPassword ? (
              <IoIosEyeOff
                onClick={() => setShowPassword(false)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#555',
                  fontSize: '20px',
                }}
              />
            ) : (
              <IoIosEye
                onClick={() => setShowPassword(true)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#555',
                  fontSize: '20px',
                }}
              />
            )}
          </div>

          {/* Submit button */}
          <button
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '12px',
              fontSize: '16px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            Register
          </button>

          {/* Create Account button */}
          <button
            style={{
              background: 'linear-gradient(90deg, #4b6cb7, #182848)', // blue-purple gradient
              color: 'white',
              padding: '12px',
              fontSize: '16px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            Create an Account
          </button>

          {/* Already have an account */}
          <div
            style={{
              textAlign: 'center',
              fontSize: '14px',
              marginTop: '15px',
            }}
          >
            Already have an account?{' '}
            <span
              style={{
                textDecoration: 'underline',
                color: '#4b6cb7',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
              onClick={() => navigate('/login')}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
